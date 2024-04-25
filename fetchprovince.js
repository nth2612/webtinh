const host = "https://vapi.vnappmob.com/api/province/";
var ngaoda = "haha";
console.log(ngaoda);
function fetchDistrict(provinceId){
    const districtHost = `https://vapi.vnappmob.com/api/province/district/${provinceId}`;
    fetch(districtHost)
        .then(function(response){
            return response.json();
        })
        .then(function(districts){
            const resultsDistricts = districts.results;
            console.log(resultsDistricts);
            const selectDistrict = document.querySelector("#districts")
            selectDistrict.innerHTML = "<option value='0' selected='true' disabled='true'>--Chọn quận/huyện--</option>";
            resultsDistricts.forEach(function(district) {
                const optionDistrict = document.createElement("option");
                optionDistrict.value = district.district_id;
                optionDistrict.text = district.district_name;
                selectDistrict.appendChild(optionDistrict);
            });
            selectDistrict.addEventListener("change", function(){
                const selectedDistrictId = this.value;
                fetchWard(selectedDistrictId)
            })
        })
}
function fetchWard(districtId){
    const wardHost = `https://vapi.vnappmob.com/api/province/ward/${districtId}`;
    fetch(wardHost)
        .then(function(response){
            return response.json();
        })
        .then(function(wards){
            const resultsWards = wards.results;
            console.log(resultsWards);
            const selectWard = document.querySelector("#wards")
            selectWard.innerHTML = "<option value='0' selected='true' disabled='true'>--Chọn phường/xã--</option>";
            resultsWards.forEach(function(ward) {
                const optionWard = document.createElement("option");
                optionWard.value = ward.ward_id;
                optionWard.text = ward.ward_name;
                selectWard.appendChild(optionWard);
            });
            selectWard.addEventListener("change", function () {
                const thephi = document.querySelector(".phivanchuyen");
                console.log(thephi)
                thephi.style.display = "block"
         });
        })
}

fetch(host)
    .then(function(response) {
        return response.json();
    })
    .then(function(provinces){
        const resultsProvinces = provinces.results;
        console.log(resultsProvinces);
        const selectProvince = document.querySelector("#provinces")
        
        resultsProvinces.forEach(function(province) {
            const optionProvince = document.createElement("option");
            optionProvince.value = province.province_id;
            optionProvince.text = province.province_name;
            selectProvince.appendChild(optionProvince);
        });
        selectProvince.addEventListener("change", function(){
            const selectedProvinceId = this.value;
            fetchDistrict(selectedProvinceId)
            const choosedProvince = document.querySelector("#provinces option:checked").textContent;
                console.log(choosedProvince);
        })
    });

const timthanhpho = document.querySelector("#provinces option:checked")
console.log(timthanhpho.textContent);