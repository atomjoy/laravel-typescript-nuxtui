# Mysql GroupBy

## Disable

```sql
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
```

## Minimal

```php
$orders = $orders->select('user_id', DB::raw('max(total) as value'));
$orders = $orders->select('user_id', DB::raw('avg(total) as value'));
$orders = $orders->select('user_id', DB::raw('sum(total) as value'));

$users = DB::table('users')
    ->groupBy('account_id')
    ->having('account_id', '>', 50)
    ->get();

$report = DB::table('orders')
    ->selectRaw('count(*) as total_orders, customer_id')
    ->groupBy('customer_id')
    ->havingBetween('total_orders', [5, 15])
    ->get();

$products = DB::table('products')
    ->selectRaw('category, AVG(price) as average_price')
    ->groupBy('category')
    ->havingRaw('average_price > ?', [100])
    ->get();

$orders = Order::query()
    ->select('user_id')->with('user:name,id')
    ->groupBy('user_id')->get();
```

## One column

```php

$data = Employee::select(
  'department',
  DB::raw('SUM(salary) as total_salary'),
  DB::raw('COUNT(*) as total_employees'),
  DB::raw('SUM(IF(bonus > 13000, 1, 0)) as employees_with_bonus')
)
->groupBy('department')
->havingRaw('total_employees > 5 AND total_salary > 10000')
->orHavingRaw('department_rank LIKE ?', array("%$keyword%"))
->get();
```

## Two columns

```php
Model::selectRaw('count(*) AS cnt, caller, ANY_VALUE(callee)')
    ->groupBy('caller')->orderBy('cnt', 'DESC')
    ->limit(5)->get();

$data = Employee::select(
'department',
'location',
DB::raw('SUM(salary) as total_salary'),
DB::raw('COUNT(\*) as total_employees'),
DB::raw('SUM(IF(bonus > 1000, 1, 0)) as employees_with_bonus')
)
->groupBy('department', 'location')
->havingRaw('total_employees > 5 AND total_salary > 10000')
->get();
```

## With join

```php
$data = Employee::select(
  'employees.department',
  'employees.location',
  DB::raw('SUM(employees.salary) as total_salary'),
  DB::raw('COUNT(*) as total_employees'),
  DB::raw('SUM(IF(employees.bonus > 1000, 1, 0)) as employees_with_bonus')
)
->join('departments', 'employees.department', '=', 'departments.name')
->groupBy('employees.department', 'employees.location')
->havingRaw('total_employees > 5 AND total_salary > 10000')
->get();

$products = Product::query()
    ->select(['name', 'stock_quantity'])
    ->join('order_product', 'products.id', '=', 'order_product.product_id')
    ->addSelect(DB::raw('SUM(order_product.quantity) + products.stock_quantity as total_quantity'))
    ->groupBy('products.id')
    ->get();

$all = DB::table("items")
    ->select(
        "items.id",
        "items.title",
        "items.min_quantity",
        DB::raw('SUM(items_count.quantity) as total_quantity')
    )
    ->join("items_count", "items_count.id_item", "=", "items.id")
    ->groupBy("items.id")
    ->having("total_quantity", "<", DB::raw("items.min_quantity"))
    ->get();
```
