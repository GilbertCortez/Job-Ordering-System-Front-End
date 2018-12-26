<template>
  <div class="error-page window-height window-width bg-white column items-center no-wrap">
    <div class="error-code bg-primary flex items-center content-center justify-center">
      MIRDC
    </div>
    <div>
      <div class="error-card shadow-4 bg-white column items-center justify-center no-wrap">

        <p><h6>JOB ORDERING SYSTEM</h6>
        <q-field  label="ID Number" icon="person"><q-input v-model="id_no" type="text" /></q-field>
        <q-field   label="Password" icon="lock"><q-input type="password" v-model="password" no-pass-toggle/></q-field>
        <br>
         
          <q-btn color="primary" width="200px" v-on:click="login" >
            Login
          </q-btn>
        </p><br>
    	<p><i>powered by Single Sign-on System</i></p>
      </div>
    </div>
  </div>
</template>

<script>
  import { Notify } from 'quasar'
  export default {
    data () {
      return {
        id_no: '1234',
        password: '1234',
        users: [
        { id_no: '1234', password: '1234', user_type: 'MIS' },
        { id_no: '2345', password: '2345', user_type: 'REQUESTER'},
        { id_no: '3456', password: '3456', user_type: 'CHIEF'}
        ]
      }
    },
    methods : {
      login: function () {
        var current_id_no= this.id_no;
        var current_password= this.password;
        var found_user= [];

        this.users.forEach(function(obj){
        console.log(obj)
          obj.id_no===current_id_no && obj.password=== current_password ? found_user=obj : null;
        });

        if(!( found_user.length == 0 )){
          sessionStorage.setItem("logged_in_user", JSON.stringify(found_user));
            Notify.create({
            message: "You're now logged in!"+ found_user.user_type,
            type: 'positive',
            position: 'top-right'
          })
          this.$q.notify()
          if(found_user.user_type ==='MIS'){
            window.location.href='/#/MIS/Dashboard'
          }
        }
        else{
           Notify.create({
            message: "Invalid credentials!",
            type: 'negative',
            position: 'top-right'
          })
          this.$q.notify()
         }

    }
    },
    mounted () {
      sessionStorage.removeItem("logged_in_user");
    }

  }
   

</script>
<style lang="stylus">
.error-page
  .error-code
    height 50vh
    width 100%
    padding-top 15vh
    @media (orientation: landscape) { 
      font-size 30vw
    }
    @media (orientation: portrait) { 
      font-size 30vh
    }
    color rgba(255, 255, 255, .2)
    overflow hidden
  .error-card
    border-radius 2px
    margin-top -50px
    width 80vw
    max-width 600px
    padding 25px
    > i
      font-size 5rem
</style>