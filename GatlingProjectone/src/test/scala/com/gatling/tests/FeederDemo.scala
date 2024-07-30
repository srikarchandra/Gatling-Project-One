package com.gatling.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class FeederDemo extends Simulation{

  //protocol
  val htttpProtocol = http.baseUrl(url="https://computer-database.gatling.io/")

  // scenario
   val feeder =csv(fileName= "data/data1.csv").circular

  val  scn =scenario(scenarioName= "Feeders Demo")
    .repeat(times= 1) {
    feed(feeder)
        .exec { session =>
          println("Name: " + session("name").as[String])
          println("Job: " + session("job").as[String])
            println("Page: " + session("pgee").as[String])
          session
        }
        .pause(duration = 1)
      .exec(http(requestName ="Goto ${page}")
      .get("/#{page}")
      )
    }

//setup
  setUp(scn.inject(atOnceUsers(users=3))).protocols(htttpProtocol)
}
