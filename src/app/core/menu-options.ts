type Menu = {
  id: number;
  name: string;
  link: string;
};

export const menuOptions: Menu[] = [
  {
    id: 1,
    name: 'Inicio',
    link: '',
  },
  {
    id: 2,
    name: 'Almacen de materiales',
    link: 'materials',
  },
  {
    id: 3,
    name: 'Reportes',
    link: 'reports',
  },
];
