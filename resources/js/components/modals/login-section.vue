<template>
    <!-- Modal -->
    <div class="modal fade login-register" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="modal-body">
                    <!-- start navs section -->
                    <div class="modal-tab">
                        <ul class="nav nav-pills mb-3 list-con col-lg row" id="pills-tab" role="tablist">
                            <li class="nav-item col-6">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">تسجيل الدخول</a>
                            </li>
                            <li class="nav-item col-6">
                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"> إنشاء حساب</a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1"> <i class="fas fa-phone-alt"></i> رقم الجوال</label>

                                    <div class="row w-100 phone-n">
                                        <input class="form-control mr-sm-2 search-t col-lg" id="mobile" type="number" placeholder="ادخال رقم الجوال" aria-label="Search">
                                        <span class="flag-img">(+966) <img src="assets/img/saudi-arabia.svg" alt=""></span>
                                    </div> </div>
                                <div class="form-group">
                                    <label for="password"> <i class="fas fa-lock"></i> كلمة المرور</label>
                                    <input type="password" class="form-control" id="password" placeholder="ادخل كلمة المرور">
                                </div>
                                <a href="" data-toggle="modal" data-target="#exampleModalCenter-1"  aria-label="Close" data-dismiss="modal">هل نسيت كلمة المرور؟</a>
                                <div class="tab-button">
                                    <button type="submit" class="btn">تسجيل الدخول</button>
                                </div>
                                <div class="tab-a"> <span> لا تملك حساب؟ <a href="">أنشئ حسابك الآن!</a></span></div>
                            </form>


                        </div>
                        <register_section></register_section>
                    </div>
                </div>
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
