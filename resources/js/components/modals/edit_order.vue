<template>
    <div class="modal fade add-o" id="exampleModalCenter-10" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="modal-header">
                    <p>تعديل خدمة</p>
                </div>
                <div class="modal-body secound-m">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">الخدمة الرئيسية</label>
                        <select class="form-control minimal" id="exampleFormControlSelect1">
                            <option>التصميم</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">الخدمة الفرعية</label>
                        <select class="form-control minimal" id="exampleFormControlSelect2">
                            <option>تصميم جرافيك</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput1"> إسم الخدمة</label>
                        <input type="text" class="form-control" id="formGroupExampleInput1" placeholder="تصميم منازل">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2"> نوع الخدمة</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="خدمات">
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput3"> السعر</label>
                        <input type="number" class="form-control" id="formGroupExampleInput3" placeholder="550 ر.س">
                    </div>
                    <div class="form-group">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1"> الوصف</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4">تصميم فيلا على برنامج اليستريتور
                                        </textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <h6 class="text-right">صورة الخدمة</h6>                                                                                                   <!-- Upload  -->
                            <form id="file-upload-form" class="uploader">
                                <input id="file-upload" type="file" name="fileUpload" onchange="ImageViewTrigger(this,'edit-order')" accept="image/*" />

                                <label for="file-upload" id="file-drag">
                                    <img id="file-image" src="#" alt="Preview" class="hidden">
                                    <div id="start">
                                        <img src="lib/img/upload.svg" alt="" id="edit-order">
                                        <div id="notimage" class="hidden">Please select an image</div>
                                    </div>
                                    <div id="response" class="hidden">
                                        <div id="messages"></div>
                                        <progress class="progress" id="file-progress" value="0">
                                            <span>0</span>%
                                        </progress>
                                    </div>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div class="tab-button">
                        <button type="submit" class="btn">تعديل</button>
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
