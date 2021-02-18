<template>
    <div class="first-s">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="container">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="assets/img/1.png">
                    </div>
                    <div class="carousel-item"></div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="assets/img/1.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="assets/img/1.png" alt="Third slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="assets/img/1.png" alt="Third slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="assets/img/1.png" alt="Third slide">
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="arow-s-l arow-s" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="arow-s-r arow-s" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                <span class="sr-only">Next</span>
            </a>
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                <li data-target="#carouselExampleControls" data-slide-to="3"></li>
                <li data-target="#carouselExampleControls" data-slide-to="4"></li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log('Component mounted carousel')
    },
    data() {
        return {
            Advertisments : [
            ]
        }
        },
    created() {
        axios.get('http://3.124.189.172/api/home/install')
        .then(response =>{
                this.Advertisments = response.data;
        },
        )
    }
};

</script>
