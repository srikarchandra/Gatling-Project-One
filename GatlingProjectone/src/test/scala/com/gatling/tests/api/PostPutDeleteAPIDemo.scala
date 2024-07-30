package com.gatling.tests.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class PostPutDeleteAPIDemo  extends Simulation{

  //protocol
  val httpProtocol = http
    .baseUrl(url ="https://reqres.in/api")

  //scenario
  val createUserScn= scenario(scenarioName="Create User")
    .exec(
  http (requestName ="Create user req")
    .post(url ="/users")
    .header(name="content-type", value="application/json")
    .asJson
    .body(RawFileBody(filePath ="data/user.json"))
//    .body(StringBody(
//      """
//        |{
//        |    "name": "Srikar",
//        |    "job": "leader"
//        |}
//        |""".stripMargin)).asJson
    .check(
      status is 201,
        jsonPath(path="$.name")is "Srikar"
    )
    )
    .pause(1)

    val updateUserScn = scenario(scenarioName = "Update User")
    .exec(
      http(requestName="update user")
        .put(url="/users/2")
        .body(RawFileBody("data/user.json")).asJson
        check(
        status is 200,
        jsonPath(path="$.name")is "Srikar"

        )
    )
      .pause(duration=1)

  val deletUserScn = scenario(scenarioName = "Delete User")
    .exec(
      http(requestName="delete user req")
        .delete(url="/users/2")
        .check(status is 204)

    )
  .pause(duration=1)
  //setup
  setUp(
    createUserScn.inject(rampUsers(users= 10).during(5)),
    updateUserScn.inject(rampUsers(users=5).during(3)),
    deletUserScn.inject(rampUsers(users=3).during(3))
  ).protocols(httpProtocol)

}
