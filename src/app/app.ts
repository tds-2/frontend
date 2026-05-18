//==================================================
// Componente principal APP
// Sirve como contenedor principal
// Aqui cargamos directamente el panel
// ==================================================

import { Component } from "@angular/core";
import { Panel } from "./components/panel/panel";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [Panel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App{}