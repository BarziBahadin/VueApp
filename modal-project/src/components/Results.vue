<template>
    <div class="">

  
  <p>you have {{ score }} ms </p>
  <p class="rank">{{ rank }}</p>  </div>
</template>

<script>
export default {
props : ['score'],
data(){
    return {
       rank:null,

    }
},
mounted(){
    if(this.score<250){
        this.rank = "Ninja Fingers"
    }else if (this.score<400){
        this.rank="rapid Reflexes"
    } else{
        this.rank =" snail pace... to slow"
    }
}
}
</script>

<style>
.rank{
    font-size: 1.4em;
    color:#0faf88
    ;font-weight: bold;
}
</style>