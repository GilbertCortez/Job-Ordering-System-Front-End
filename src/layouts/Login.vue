<template>
  <div class="error-page window-height window-width bg-white column items-center no-wrap">
    <div class="error-code bg-primary flex items-center content-center justify-center">
      MIDRC
    </div>
    <div>
      <div class="error-card shadow-4 bg-white column items-center justify-center no-wrap">

        <p><h6>JOB ORDERING SYSTEM</h6>
        <q-field  label="ID Number" icon="person"><q-input type="text" /></q-field>
        <q-field   label="Password" icon="lock"><q-input type="password"  no-pass-toggle/></q-field>
        <br>
         
          <q-btn color="primary" width="200px" >
            Login
          </q-btn>
        </p><br>
    	<p><i>powered by Single Sign-on System</i></p>
      </div>
    </div>
  </div>
</template>


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