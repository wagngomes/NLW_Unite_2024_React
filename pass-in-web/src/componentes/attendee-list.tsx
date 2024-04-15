import { Search } from "lucide-react";

export function AttendeeList() {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="px-3 py-1.5 w-72 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none"
            placeholder="Buscar participante"
          />
        </div>
      </div>

    <div className="border border-white/10 rounded-lg">
      <table className="w-full">
        <thead>
            <tr className="border-b border-white/10">
                <th className="py-3 px-2.5 text-sm font-semibold">
                    <input type="checkbox" />                   
                </th>
                <th className="py-3 px-2.5 text-sm font-semibold">Código</th>
                <th className="py-3 px-2.5 text-sm font-semibold">Participante</th>
                <th className="py-3 px-2.5 text-sm font-semibold">Data de inscrição</th>
                <th className="py-3 px-2.5 text-sm font-semibold">Data do check in</th>
                <th className="py-3 px-2.5 text-sm font-semibold"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="checkbox" />      
                </td>
                <td>12234444</td>
                <td>
                    <div>
                        <span>wagner</span>
                        <span>wagner@gmail.com</span>
                    </div>
                </td>
                <td>
                    7 dias atras
                </td>
                <td>
                    3 dias atras
                </td>
                <td>

                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={3}>
                    mostrando 10 de 220 itens
                </td>
                <td colSpan={3}>

                    pagina 1 de 23
                </td>
            </tr>
        </tfoot>
      </table>

      </div>
    </div>
  );
}
