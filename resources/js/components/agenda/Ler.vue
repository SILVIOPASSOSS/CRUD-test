<template>
     <div class="container mt-2">
        <div class="row">
            <div class="col-12">
                <ul id="ver-contato" class="list-group">
                    <li class="list-group-item active" aria-current="true">{{ contact.nome }}</li>
                    <li class="list-group-item">Telefone de Contato: {{ contact.telefone }}</li>
                    <li class="list-group-item">Endereço: {{ contact.endereco }}</li>
                    <li class="list-group-item">E-mail: {{ contact.email }}</li>
                </ul>
                <router-link exact-active-class="active" to="/contatos"><button type="submit" class="btn btn-primary" >Voltar</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"verContato",
    data(){
        return {
            contact:{
                nome:"",
                telefone:"",
                endereco:"",
                email:""
            }
        }
    },
    mounted(){
        this.mostrarContatos()
    },
    methods:{
        async mostrarContatos(){
            await this.axios.get(`/api/contact/${this.$route.params.id}`).then(response=>{
                    const {nome, telefone, endereco, email, } = response.data
                    this.contact.nome = nome
                    this.contact.telefone = telefone
                    this.contact.endereco = endereco
                    this.contact.email = email
                }).catch(error=>{
                    console.log(error)
                })
        },
    }  
}
</script>