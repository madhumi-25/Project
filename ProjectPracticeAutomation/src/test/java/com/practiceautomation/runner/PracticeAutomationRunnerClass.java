package com.practiceautomation.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions 
		(
			features = "src/main/resources/Feature/TestCase.feature",
			plugin = {"pretty", "html:reports/cucumber-html-report"},
//			tags = {"@TC_05_Checking_Mandatory_fields_in_Billing_details"},
			glue = {"com.practiceautomation.stepdefinition"},
			monochrome = true
		)
	public class PracticeAutomationRunnerClass 
	{

	}                                      

