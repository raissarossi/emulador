import Exemplo from "./exemplo";

const Aprovacao = () => {
    return (
        <div className="w-full">
            <table className="min-w-full divide-y divide-gray-200 w-5/6">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            Nome
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            EDV
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            Código
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                            Aprovar
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <Exemplo />
                    <Exemplo />
                    <Exemplo />
                    <Exemplo />
                </tbody>
            </table>
        </div>
    );
}

export default Aprovacao;