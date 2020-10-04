$(document).ready(function () {
       $('#ZipcodesTable').DataTable({
            "paging": true,
            "pageLength": 10,
            "processing": true,
            "serverSide": true,
            "ajax": {
                "data":"json",
                "type": "POST",
                "url": "/doggy"
            },
                "columns":
                    [
                        { "data": "ISA" },
                        { "data": "po" },
                        { "data": "asin_units" },
                        { "data": "asin" }
                    ]
            
        });
    });