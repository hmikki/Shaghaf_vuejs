<template>
    <h2>
        {{Advertisments}}
    </h2>
</template>
<script>
export default {
    data() {
        return {
            Advertisments : []
        }
    },
    created() {
        axios.get('http://3.124.189.172/api/home/install')
            .then(response =>{
                    this.Advertisments = response.data;
                },
            )
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
};
</script>
