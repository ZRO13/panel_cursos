import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cursos-layout',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './CursosLayout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursosLayout { }
