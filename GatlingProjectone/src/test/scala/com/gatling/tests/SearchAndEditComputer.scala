package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class SearchAndEditComputer extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.9")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36")

	val search=exec(http("Home")
		.get("/computers")
	)
		.pause(2)
		.exec(http("Search")
			.get("/computers?f=ACE")
		)
		.pause(3)
		.exec(http("Select")
			.get("/computers/381")
		)
		.pause(4)

val edit= exec(http("Edit")
		.post("/computers/381")

		.formParam("name", "ACE")
		.formParam("introduced", "2020-01-01")
		.formParam("discontinued", "2030-01-01")
		.formParam("company", "2"))
	.pause(4)

	val scn = scenario("SearchAndEditComputer").exec(search,edit)

	val users= scenario("Users").exec(search)
	val admins = scenario("Admins").exec(search,edit)
	setUp(
		users.inject(rampUsers(users=10).during(10)),
		admins.inject(rampUsers(4).during(10))
	).protocols(httpProtocol)

}