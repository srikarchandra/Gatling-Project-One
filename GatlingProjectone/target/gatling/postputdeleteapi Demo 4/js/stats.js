var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "379",
        "ok": "379",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "474",
        "ok": "474",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles1": {
        "total": "487",
        "ok": "487",
        "ko": "-"
    },
    "percentiles2": {
        "total": "524",
        "ok": "524",
        "ko": "-"
    },
    "percentiles3": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "percentiles4": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "2.5",
        "ko": "-"
    }
},
contents: {
"req_create-user-req-8c986": {
        type: "REQUEST",
        name: "Create user req",
path: "Create user req",
pathFormatted: "req_create-user-req-8c986",
stats: {
    "name": "Create user req",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "379",
        "ok": "379",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "465",
        "ok": "465",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "percentiles1": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "percentiles2": {
        "total": "508",
        "ok": "508",
        "ko": "-"
    },
    "percentiles3": {
        "total": "544",
        "ok": "544",
        "ko": "-"
    },
    "percentiles4": {
        "total": "550",
        "ok": "550",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
}
    },"req_update-user-a0386": {
        type: "REQUEST",
        name: "update user",
path: "update user",
pathFormatted: "req_update-user-a0386",
stats: {
    "name": "update user",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "493",
        "ok": "493",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "percentiles1": {
        "total": "500",
        "ok": "500",
        "ko": "-"
    },
    "percentiles2": {
        "total": "539",
        "ok": "539",
        "ko": "-"
    },
    "percentiles3": {
        "total": "549",
        "ok": "549",
        "ko": "-"
    },
    "percentiles4": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
