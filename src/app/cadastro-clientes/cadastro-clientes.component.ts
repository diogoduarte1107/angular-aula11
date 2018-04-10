import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  //importar o ReactiveFormsModule
  
  formGroup : FormGroup;

  constructor( private formBuiler: FormBuilder, private clienteService : ClienteService) {
    this.formGroup = this.formBuiler.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      telefone : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]]
    })
   
  }
    
  ngOnInit() {
  }

  cadastrar(){
    this.clienteService.insert(this.formGroup.value)
     .subscribe(response => {
    console.log("Cadastro com sucesso");
  }, error => {
    console.log("Erro ao cadastrar");
  })

  console.log(this.formGroup.value);

}
}