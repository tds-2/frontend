// Rutas de la aplicacion
// Define que componentes debe mostrar
//=======================================================000
// Importa routes para definir rutas
import { Routes } from '@angular/router';

import { Panel } from './components/panel/panel';

// Exporta ruta de la aplicacion
export const routes:Routes=[
    {

        path:'',
        component: Panel
    }
]