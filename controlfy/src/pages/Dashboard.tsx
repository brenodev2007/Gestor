import { Button } from "../../@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const pieData = [
  { name: 'Contas Fixas', value: 400 },
  { name: 'Investimentos', value: 300 },
  { name: 'Lazer', value: 300 },
  { name: 'Outros', value: 200 },
];

const barData = [
  { name: 'Jan', entrada: 4000, saida: 2400 },
  { name: 'Fev', entrada: 3000, saida: 1398 },
  { name: 'Mar', entrada: 2000, saida: 9800 },
  { name: 'Abr', entrada: 2780, saida: 3908 },
  { name: 'Mai', entrada: 1890, saida: 4800 },
  { name: 'Jun', entrada: 2390, saida: 3800 },
  { name: 'Jul', entrada: 3490, saida: 4300 },
];

export function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-emerald-500">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Adicionar Despesa</Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Adicionar Receita</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$5,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesa Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$2,250.00</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Balanço</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$2,981.89</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total em caixa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$50,231.89</div>
            <p className="text-xs text-muted-foreground">+201 from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Entradas e Saídas</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="entrada" fill="#10b981" />
                <Bar dataKey="saida" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Distribuição de Despesas</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#10b981" />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
