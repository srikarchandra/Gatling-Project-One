package com.gatling.tests.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jsonpath.JsonPath

class APITest1 extends  Simulation{

  //protocol
  val httpProtocol=http
    .baseUrl(url="https://reqres.in/api/users")


  //scenario

  val scn = scenario( scenarioName="Get API Request Demo")
    .exec(
      http( requestName ="Get Single User")
        .get("/2")
        .check(status.is(200))
        .check(jsonPath(path = "$.data.first_name").is(expected = "Janet"))

    )
    .pause( duration=1)
  //setup
  setUp(
    scn.inject(rampUsers(users =10).during(5))
      .protocols(httpProtocol)


    )

}