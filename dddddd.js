function order() {
                let name = $('#order-name').val();
                let count = $('#order-count').val();
                let order = $('#order-address').val();
                let phone = $('#order-phone').val();
                if (name === "") {
                    alert('이름을 입력하세요');
                } else if (count === "") {
                    alert('수량을 입력하세요')
                } else if (order === "") {
                    alert("주소를 입력하세요")
                } else if (phone === "") {
                    alert("전화번호를 입력하세요")
                } else
                    alert(value)
            }

            function Show_exchange_rate() {
                $(document).ready(function () {
                    $.ajax({
                        type: "get",
                        url: "https://api.manana.kr/exchange/rate.json",
                        data: {},
                        success: function (response) {
                            let value = response[1]["rate"];
                            let value_1 = `<li>${value}</li>`;
                            $('#ex_rate').append(value_1)
                        },