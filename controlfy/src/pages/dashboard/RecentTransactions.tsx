import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transações recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Salário</p>
              <p className="text-sm text-muted-foreground">Receita</p>
            </div>
            <div className="ml-auto font-medium">+R$ 2.500,00</div>
          </div>

          <div className="flex items-center">
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Aluguel</p>
              <p className="text-sm text-muted-foreground">Despesa</p>
            </div>
            <div className="ml-auto font-medium">-R$ 1.250,00</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
