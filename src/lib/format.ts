import type { Money } from "@/types/theme";

export function formatMoney(money: Money): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: money.currencyCode,
    minimumFractionDigits: 0,
  }).format(money.amount);
}
