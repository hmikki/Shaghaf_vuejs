<template>
    <div class="wrapper">
        <div class="container">
            <div class="sevice-user">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="#">خدماتنا</a></li>
                        <li class="breadcrumb-item" aria-current="page"><a href="">التصميم الجرافيكي</a></li>
                        <li class="breadcrumb-item active" aria-current="page">محمد بن عبد الله</li>
                    </ol>
                </nav>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="img-o-h">
                                <a href=""><span class="chat"><img src="assets/img/chat.svg" alt=""></span></a>
                                <div class="order-card-img">
                                    <img class="card-img-top" src="assets/img/m-3.svg" alt="Card image cap">
                                </div>
                            </div>
                            <div class="card-body">
                                <h4>محمد بن عبد الله</h4>
                                <p class="card-text">تصميم بنرات</p>
                                <span>عبدالله جرغون بكالوريوس تصميم عملت في العديد من الشركات وحصلت على العديد من المشاريع واعمل اعمل الان كفريلانسر عبر منصات العمل الحر</span>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-3 p-0"><span><i class="fas fa-map-marker-alt"></i> الرياض</span></div>
                                    <div class="col-3 p-0"><span><i class="fas fa-user"></i> شخصي</span></div>
                                    <div class="col-lg-2"></div>
                                    <div class="col-4 star">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="pre-works said-about-us">
                                <div class="col-lg-11 o-h">
                                    <h6>الأعمال السابقة</h6>
                                    <portfolio></portfolio>
                                </div>
                                <div class="col-lg-1 pre-next">
                                    <a class="carousel-control-prev" href="#carouselExampleControls-4" role="button" data-slide="prev">
                                        <span class="arow-s-l arow-s" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls-4" role="button" data-slide="next">
                                        <span class="arow-s-r arow-s" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="pre-works pre-works-sec">
                                <div class="col-lg-3">
                                    <h6>الموقع</h6>
                                </div>
                                <div class="col-lg-9">
                                    <div class="map-pre-w">
                                        <img src="assets/img/map.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="pro-ser col-3">
                        <!-- start navs section -->
                        <div class="col-lg most-l">
                            <a href="javascript:;" class="active">منتجات </a>
                            <a href="javascript:;">خدمات</a>
                        </div>
                    </div>
                </div>
                <user_services></user_services>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
