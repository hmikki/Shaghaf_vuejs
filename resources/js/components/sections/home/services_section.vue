<template>
    <section class="our-serve" id="our-serve">
        <div class="test login100-pic js-tilt" data-tilt>
            <img src="assets/img/test.svg" alt="">
        </div>
        <div class="container">
            <h5 class="text-right"><span class="text-con"> خدماتنا </span><span class="text-c"></span></h5>
            <div class="row">
                <div class="col-lg-3 login100-pic js-tilt" data-tilt>
                    <div class="service" onclick="location.href='#';">
                        <img src="assets/img/s-1.svg" alt="">
                        <p>التصميم الجرافيكي</p>
                    </div>
                </div>
                <div class="col-lg-3 login100-pic js-tilt" data-tilt>
                    <div class="service" onclick="location.href='#';">
                        <img src="assets/img/s-2.svg" alt="">
                        <p>الموشن جرافيك</p>
                    </div>
                </div>
                <div class="col-lg-3 login100-pic js-tilt" data-tilt>
                    <div class="service" onclick="location.href='#';">
                        <img src="assets/img/s-3.svg" alt="">
                        <p>التعليق الصوتي</p>
                    </div>
                </div>
                <div class="col-lg-3 login100-pic js-tilt" data-tilt>
                    <div class="service" onclick="location.href='#';">
                        <img src="assets/img/s-4.svg" alt="">
                        <p>الترجمة</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted carousel')
    }
}
</script>
