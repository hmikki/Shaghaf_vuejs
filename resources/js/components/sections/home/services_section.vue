<template>
    <section class="our-serve" id="our-serve">
        <div class="test login100-pic js-tilt" data-tilt>
            <img src="assets/img/test.svg" alt="">
        </div>
        <div class="container">
            <h5 class="text-right"><span class="text-con"> خدماتنا </span><span class="text-c"></span></h5>
            <div class="row">
                <div class="col-lg-3 login100-pic js-tilt" data-tilt v-for="(category,index)in Categories">
                    <div class="service" onclick="location.href='#';">
                        <img :src="category.image" alt="" style="width: 80%">
                        <p>{{category.name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Categories',
    mounted() {
        console.log('Component mounted')
    },
    data() {
        return {
            Categories : [],
        }
    },
    created() {
        this.fetchCategories();
    },
    methods : {
        fetchCategories(){
            axios.get('http://3.124.189.172/api/home/categories')
                .then(res => {
                    this.Categories = res.data['Categories'];
                    console.log(this.Categories);
                });
        },
    },
}
</script>
