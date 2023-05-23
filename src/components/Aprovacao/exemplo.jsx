import BtnAprovado from './BtnAprovado';
import BtnNegado from './BtnNegado';

const Exemplo = () => {
    return (
        <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                UserExemplo
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">12345678</td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                Exemplo@gmail.com
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                323582
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <BtnAprovado />
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <BtnNegado />

            </td>
        </tr>
    );
}

export default Exemplo;