import { A2025s2Component } from './components/aulas-praticas/agenda/ano-per/a2025s2/a2025s2.component';
import { A2025s1Component } from './components/aulas-praticas/agenda/ano-per/a2025s1/a2025s1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './components/equipe/equipe.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { InformacoesComponent } from './components/informacoes/informacoes.component';
import { AulasPraticasComponent } from './components/aulas-praticas/aulas-praticas.component';
import { AnaliseDoComportamentoComponent } from './components/informacoes/analise-do-comportamento/analise-do-comportamento.component';
import { ArtigosETextosComponent } from './components/informacoes/artigos-e-textos/artigos-e-textos.component';
import { EticaComponent } from './components/informacoes/etica/etica.component';
import { MonitoriaComponent } from './components/informacoes/monitoria/monitoria.component';
import { ContatoProfessorComponent } from './components/equipe/contato-professor/contato-professor.component';
import { ContatoTecnicoComponent } from './components/equipe/contato-tecnico/contato-tecnico.component';
import { ContatoHadasaComponent } from './components/equipe/contato-hadasa/contato-hadasa.component';
import { ContatoKatarineComponent } from './components/equipe/contato-katarine/contato-katarine.component';
import { ContatoMilenaComponent } from './components/equipe/contato-milena/contato-milena.component';
import { ContatoMatheusComponent } from './components/equipe/contato-matheus/contato-matheus.component';
import { ContatoAmandaComponent } from './components/equipe/contato-amanda/contato-amanda.component';
import { ContatoJuliaComponent } from './components/equipe/contato-julia/contato-julia.component';
import { ProcedimentosComponent } from './components/aulas-praticas/procedimentos/procedimentos.component';
import { LinhaDeBaseComponent } from './components/aulas-praticas/procedimentos/linha-de-base/linha-de-base.component';
import { AgendaComponent } from './components/aulas-praticas/agenda/agenda.component';
import { TreinoAoBebedouroComponent } from './components/aulas-praticas/procedimentos/treino-ao-bebedouro/treino-ao-bebedouro.component';
import { ModelagemComponent } from './components/aulas-praticas/procedimentos/modelagem/modelagem.component';
import { CrfComponent } from './components/aulas-praticas/procedimentos/crf/crf.component';
import { BuenoMetutinoComponent } from './components/aulas-praticas/agenda/bueno-metutino/bueno-metutino.component';
import { BuenoNoturnoComponent } from './components/aulas-praticas/agenda/bueno-noturno/bueno-noturno.component';
import { PerimetralNoturnoComponent } from './components/aulas-praticas/agenda/perimetral-noturno/perimetral-noturno.component';
import { ExtincaoComponent } from './components/aulas-praticas/procedimentos/extincao/extincao.component';
import { RecondicionamentoComponent } from './components/aulas-praticas/procedimentos/recondicionamento/recondicionamento.component';
import { EsquemaRazaoFixaComponent } from './components/aulas-praticas/procedimentos/esquema-razao-fixa/esquema-razao-fixa.component';
import { EsquemaRazaoVariavelComponent } from './components/aulas-praticas/procedimentos/esquema-razao-variavel/esquema-razao-variavel.component';
import { TreinoDiscriminativoComponent } from './components/aulas-praticas/procedimentos/treino-discriminativo/treino-discriminativo.component';
import { IntervaloFixoComponent } from './components/aulas-praticas/procedimentos/intervalo-fixo/intervalo-fixo.component';
import { IntervaloVariavelComponent } from './components/aulas-praticas/procedimentos/intervalo-variavel/intervalo-variavel.component';
import { EncadeamentoComponent } from './components/aulas-praticas/procedimentos/encadeamento/encadeamento.component';
import { AnoPeriodoComponent } from './components/aulas-praticas/procedimentos/ano-periodo/ano-periodo.component';
import { AnoPerComponent } from './components/aulas-praticas/agenda/ano-per/ano-per.component';

const routes: Routes = [
  { path: '', redirectTo: '/informacoes/(informacoes-menu:analise-do-comportamento)', pathMatch: 'full' },
  {
    path: 'informacoes',
    component: InformacoesComponent,
    children: [
      {
        path: 'analise-do-comportamento',
        component: AnaliseDoComportamentoComponent,
        outlet: 'informacoes-menu',
      },
      {
        path: 'artigos-e-textos',
        component: ArtigosETextosComponent,
        outlet: 'informacoes-menu',
      },
      {
        path: 'etica',
        component: EticaComponent,
        outlet: 'informacoes-menu',
      },
      {
        path: 'monitoria',
        component: MonitoriaComponent,
        outlet: 'informacoes-menu',
      },
    ],
  },


  {
    path: 'procedimentos',
    component: ProcedimentosComponent,
    children: [
      {
        path: 'linha-base',
        component: LinhaDeBaseComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'treino-bebedouro',
        component: TreinoAoBebedouroComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'modelagem',
        component: ModelagemComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'crf',
        component: CrfComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'extincao',
        component: ExtincaoComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'recondicionamento',
        component: RecondicionamentoComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'razao-fixa',
        component: EsquemaRazaoFixaComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'razao-variavel',
        component: EsquemaRazaoVariavelComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'interval-fixo',
        component: IntervaloFixoComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'intervalo-variavel',
        component: IntervaloVariavelComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'treino-discriminativo',
        component: TreinoDiscriminativoComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'encaminhamento',
        component: EncadeamentoComponent,
        outlet: 'procedimentos',
      },
    ],
  },

  { path: 'ano-per', component: AnoPerComponent },
  { path: 'a2025s1', component: A2025s1Component },
  { path: 'a2025s1', component: A2025s2Component },
  { path: 'agenda', component: AgendaComponent },
  { path: 'aulas-praticas', component: AulasPraticasComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'gerenciamento', component: GerenciamentoComponent },
  { path: 'bueno-matutino', component: BuenoMetutinoComponent },
  { path: 'bueno-noturno', component: BuenoNoturnoComponent },
  { path: 'perimetral-noturno', component: PerimetralNoturnoComponent },
  { path: 'contato-professor', component: ContatoProfessorComponent },
  { path: 'contato-tecnico', component: ContatoTecnicoComponent },
  { path: 'contato-hadasa', component: ContatoHadasaComponent },
  { path: 'contato-katarine', component: ContatoKatarineComponent },
  { path: 'contato-milena', component: ContatoMilenaComponent },
  { path: 'contato-matheus', component: ContatoMatheusComponent },
  { path: 'contato-amanda', component: ContatoAmandaComponent },
  { path: 'contato-julia', component: ContatoJuliaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
