<template>
    <thanks_message></thanks_message>
    <div class="modal fade change-sit acount-sitting-2" id="exampleModalCenter-5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="modal-header">
                    <p>تعديل بيانات الحساب</p>
                </div>
                <div class="modal-body secound-m">
                    <div class="form-group">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1"><i class="fas fa-user"></i> نبذة شخصة</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">عبدالله جرغون بكالوريوس تصميم عملت في العديد من الشركات وحصلت على العديد من المشاريع واعمل اعمل الان كفريلانسر عبر منصات العمل الحرمن الشركات وحصلت على العديد
                                        </textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput1"><i class="fas fa-user"></i> الاسم كاملا</label>
                        <input type="text" class="form-control" id="formGroupExampleInput1" placeholder="محمد خالد بن الحمدان">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1"> <i class="fas fa-phone-alt"></i> رقم الجوال</label>

                        <div class="row w-100 phone-n">
                            <input class="form-control mr-sm-2 search-t col-lg" type="number" placeholder="1234567890" aria-label="Search">
                            <span class="flag-img">(+966) <img src="assets/img/saudi-arabia.svg" alt=""></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail2"><i class="fas fa-envelope"></i> البريد الالكتروني</label>
                        <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="example@gmail.com">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">المدينة</label>
                        <select class="form-control minimal" id="exampleFormControlSelect2">
                            <option>المملكة العربية السعودية - المدينة المنورة</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1"><i class="fas fa-map-marker-alt"></i> الموقع</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="المملكة العربية السعودية - المدينة المنورة - شارع الملك عبد الله">
                    </div>
                    <div class="row">
                        <div class="form-group col-lg-6">
                            <label for="formGroupExampleInput"> رقم الايبان</label>
                            <input type="number" class="form-control" id="formGroupExampleInput" placeholder="6497971641610302">
                        </div>
                        <div class="form-group col-lg-6">
                            <label for="exampleFormControlSelect1"> الجنس</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option value="">ذكر</option>
                                <option value="">أنثى</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <h6 class="text-right">صورة الهوية الوطنية</h6>                                                                                                   <!-- Upload  -->
                            <form id="file-upload-form" class="uploader">
                                <input id="file-upload" type="file" name="fileUpload" onchange="ImageViewTrigger(this,'image12')" accept="image/*" />

                                <label for="file-upload" id="file-drag">
                                    <!--    <img id="file-image" src="#" alt="Preview" class="hidden">-->
                                    <div id="start">
                                        <img src="assets/img/upload.svg" class="w-100" id="image12" alt="">
                                    </div>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div class="tab-button">
                        <button type="submit" class="btn" data-toggle="modal" data-target="#exampleModalCenter-7" aria-label="Close" data-dismiss="modal">حفظ التعديل</button>
                    </div>
                    <div class="tab-a"></div>
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
