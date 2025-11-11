import ShoppingCart from '../assets/ShoppingCart.jsx';
import PlusIcon from '../assets/PlusIcon.jsx';

export const ventaButtons = (handleOpenVentaModal ) => [
    {
        icon: ShoppingCart,
        text: 'Nueva Venta',
        action: handleOpenVentaModal
    },
    {
        icon: null,
        text: 'Cobrar Factura',

    }
];

export const mainButtons = (handleOpenModal) => [
    {
        icon: ShoppingCart,
        text: 'Nueva Venta',
        action: handleOpenModal
    },
    {
        icon: PlusIcon,
        text: 'Nuevo Producto'
    }
];

