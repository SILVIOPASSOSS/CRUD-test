<template>
    <div class="container mt-2">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3>Cadastrar Contato</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="criar">
                            <div class="row">
                                   <div class="col-6 mb-2">
                                        <div form-group>
                                            <label> Nome </label>
                                            <input type="text" class="form-control" v-model="contact.nome">
                                        </div>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <div form-group>
                                            <label for="phone"> Telefone </label>
                                            <input type="number" id="phone" name="phone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}]" required placeholder="(XX) XXXXX-XXXX" class="form-control" v-model="contact.telefone">
                                        </div>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <div form-group>
                                            <label> Endereço </label>
                                            <input type="text" class="form-control" v-model="contact.endereco">
                                        </div>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <div form-group>
                                            <label> Email </label>
                                            <input type="email" class="form-control" v-model="contact.email">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary">Salvar</button>
                                        <router-link exact-active-class="active" to="/contatos"><button type="submit" class="btn btn-primary" >Voltar</button></router-link>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "criar-contato",
    data(){
        return{
            contact:{
                nome:"",
                endereco:"",
                telefone:"",
                email:""
            }
        }        
    }, 
    methods:{
        async criar(){
            await this.axios.post('/api/contact',this.contact).then(response=>{
                    this.$router.push({name:"mostrarContatos"})
                }).catch(error=>{
                    console.log(error)
                })
        }   
    }
}
</script>