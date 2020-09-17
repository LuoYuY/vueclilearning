<template>
  <div id="lyy">
    <ul>
      <li v-for="user in users" v-on:click="user.show=!user.show">
        <h2>{{ user.name }}</h2>
        <h3 v-show="user.show">{{ user.age }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteUser">Delete a user</button>
  </div>

</template>

<script>
  export default {
    //receive props
    //create property for this component to receive data
    //component: <comp> property < prop= >
    //'this': the component object

    // props: [
    //   'users'
    // ],
    props:{
      users:{
        type:Array, //if 'users' is not an array,fail //type: Array,String,etc
        required:true //
      }
    },
    data() {
      return {


      }
    },
    methods:{
      deleteUser:function () {
        this.users.pop();

      }
    }


  }
</script>

<style scoped>
  #lyy {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
