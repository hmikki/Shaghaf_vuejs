<template>
    <h1>Freelancer</h1>
</template>
<script>
export default {
    mounted() {
        console.log('freelancer mounted.');
    },
    /*data(){
        return{
            Freelancers: [],
        }
    },
    created() {
        this.fetchFreelancer();
    },

    methods:{
        fetchFreelancer(){
            axios.get('http://3.124.189.172/api/home/get_freelancers', {
                headers: {
                    'Authorization' : 'token ${access_token}'
                },
                params:{
                    'category_id' : '',
                }
            })
                .then(res => {
                    this.Freelancers = res.data['Freelancers'];
                    console.log(res.data['Freelancers']);
                });
        }
    }*/
}
</script>
