<template>
    <footer>

    
             
                
                <nav>
         
                        <RouterLink :to="$route.path === '/' ? '/' : '/actief'" class="footer_link"><img alt="Tools logo" src="../assets/tools.svg" id="settings_footer"/></RouterLink> 
                    <RouterLink :to="$route.path === '/' ? '/' : '/zoek'" class="footer_link"><img alt="Loep logo" src="../assets/loupe.svg" id="settings_footer"/></RouterLink>
                        <RouterLink :to="$route.path === '/' ? '/' : '/info'" class="footer_link"><img alt="Info logo" src="../assets/info.svg" id="settings_footer"/></RouterLink>
          </nav>

    
        </footer>
    
    </template>
    <script>
    export default {
        name: 'Footer'
    }
    </script>

    <style>
    footer {
        /* background-color: #00a9a2; */
        background-image: url(../assets/footer_streep.svg);
        background-position-x: -.5rem;
  background-position-y: -3.1rem;
  height: 6rem;
  width: 100%;
  margin-top: 1rem;

    }

    nav {
        display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
    }

    #settings_footer {
      width: 15%;
  margin-top: 2rem;
    }

    .footer_link {
  text-align: center;
  margin-block-start: .5rem;
}
</style>