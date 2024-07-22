"use client"

import { DataTable } from "@/components/ui/custom/data-table"
import {
  ColumnDef
} from "@tanstack/react-table"

const data: Sales[] = [
  {
    id: "m5gr84i9",
    product: "Water",
    quantity: 10,
    amount: 316,
    status: "success",
  },
  {
    id: "3u1reuv4",
    product: "Coca-Cola",
    quantity: 3,
    amount: 242,
    status: "success",
  },
  {
    id: "derv1ws0",
    product: "Macarrão",
    quantity: 5,
    amount: 837,
    status: "processing",
  },
  {
    id: "5kma53ae",
    product: "Arroz",
    quantity: 2,
    amount: 874,
    status: "success",
  },
  {
    id: "bhqecj4p",
    product: "Feijão",
    quantity: 2,
    amount: 721,
    status: "failed",
  },
  {
    id: "m5gr84i9",
    product: "Water",
    quantity: 10,
    amount: 316,
    status: "success",
  },
  {
    id: "3u1reuv4",
    product: "Coca-Cola",
    quantity: 3,
    amount: 242,
    status: "success",
  },
  {
    id: "derv1ws0",
    product: "Macarrão",
    quantity: 5,
    amount: 837,
    status: "processing",
  },
  {
    id: "5kma53ae",
    product: "Arroz",
    quantity: 2,
    amount: 874,
    status: "success",
  },
  {
    id: "bhqecj4p",
    product: "Feijão",
    quantity: 2,
    amount: 721,
    status: "failed",
  },
  {
    id: "m5gr84i9",
    product: "Water",
    quantity: 10,
    amount: 316,
    status: "success",
  },
  {
    id: "3u1reuv4",
    product: "Coca-Cola",
    quantity: 3,
    amount: 242,
    status: "success",
  },
  {
    id: "derv1ws0",
    product: "Macarrão",
    quantity: 5,
    amount: 837,
    status: "processing",
  },
  {
    id: "5kma53ae",
    product: "Arroz",
    quantity: 2,
    amount: 874,
    status: "success",
  },
  {
    id: "bhqecj4p",
    product: "Feijão",
    quantity: 2,
    amount: 721,
    status: "failed",
  },
]

export type Sales = {
  id: string
  product: string
  amount: number
  quantity: number
  status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey: "product",
    header: "Product"
  },
  {
    accessorKey: "amount",
    header: "Amount"
  },
  {
    accessorKey: "quantity",
    header: "Quantity"
  },
  {
    accessorKey: "status",
    header: "Status"
  },
]

export function RecentSales() {

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  )
}
