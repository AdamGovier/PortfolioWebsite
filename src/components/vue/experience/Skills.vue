<template>
    <div id="skills">
        <div>
            <h2>Skills Console</h2>
            
            <div>
              <header>
                <span><i aria-hidden="true"></i> agovier@os: ~</span>
              </header>

              <div>
              <p><span>[agovier@os ~]</span>$ skills --help</p>
  
              <h5>
                Ratings
              </h5>
  
              <p>
                <strong>Gold stars</strong> – represent professional experience level:
  
                <SkillStarExplanationItem :nStars="1" explanation="Light Usage" />
                <SkillStarExplanationItem :nStars="2" explanation="Intermediate Usage" />
                <SkillStarExplanationItem :nStars="3" explanation="In-depth Usage" />
              </p>
  
              <p>
                <strong>Purple stars</strong> - represent the level of knowledge obtained within personal or university contexts:
  
                <SkillStarExplanationItem :nStars="1" type="Other" explanation="Light Knowledge" />
                <SkillStarExplanationItem :nStars="2" type="Other" explanation="Medium Knowledge" />
                <SkillStarExplanationItem :nStars="3" type="Other" explanation="Strong Knowledge" />
              </p>
  
              <p>
                No purple stars are included if I have professional experience with that technology.
              </p>
  
              <p>
                <strong>Other</strong>
  
                <p>
                  <i></i> - Knowledge Requires a Refresher
                </p>
              </p>
  
              <p><span>[agovier@os ~]</span>$ skills list<span aria-hidden="true"></span></p>
              </div>
            </div>
        </div>

        <div id="skillsHolder">
          <Skill title="C#" type="Language" :image="CSharpIcon" :nGoldStars="3" />
          <Skill title=".NET" type="Framework" :image="DotNetIcon" :nGoldStars="3" />
          <Skill title="ASP.NET Core" type="Framework" :image="ASPNetIcon" :nGoldStars="3" />
          <Skill title="EF Core" type="Framework" :image="EFCoreIcon" :nGoldStars="3" />
          <Skill title="Blazor WASM" type="Framework" :image="BlazorIcon" :nGoldStars="3" />
          <Skill title="SQL Server" type="Database" :image="SQLServerIcon" :nGoldStars="2" />
          <Skill title="Azure" type="Cloud" :image="AzureIcon" :nGoldStars="2" />
          <Skill title="Az. DevOps" type="Cloud" :image="AzureDevopsIcon" :nGoldStars="2" />
          <Skill title="Az. Pipelines" type="Cloud" :image="AzurePipelinesIcon" :nGoldStars="2" />
          <Skill title="TypeScript" type="Language" :image="TypescriptIcon" :nGoldStars="3" />
          <Skill title="VueJS" type="Framework" :image="VueIcon" :nGoldStars="3" />
          <Skill title="ReactJS" type="Framework" :image="ReactIcon" :nGoldStars="1" :needsRefresher="true" />
          <Skill title="NodeJS" type="Backend Runtime" :image="NodeIcon" :nOtherStars="2" />
          <Skill title="HTML" type="Markup" :image="HtmlIcon" />
          <Skill title="CSS" type="Styling" :image="CssIcon"   />
          <Skill title="Git" type="Source Control" :image="GitIcon" />
          <Skill title="Java" type="Language" :image="JavaIcon" :nOtherStars="2" :needsRefresher="true" />
          <Skill title="MongoDB" type="Database" :image="MongoIcon" :nOtherStars="1" :needsRefresher="true" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Skill from "./Skill.vue";
import SkillStarExplanationItem from "./SkillStarExplanationItem.vue";

// Icons
import TypescriptIcon from "../../../assets/images/skills/Typescript.webp";
import VueIcon from "../../../assets/images/skills/Vue.webp";
import NodeIcon from "../../../assets/images/skills/Node.webp";
import HtmlIcon from "../../../assets/images/skills/HTML.webp";
import CssIcon from "../../../assets/images/skills/CSS.webp";
import GitIcon from "../../../assets/images/skills/Git.webp";
import JavaIcon from "../../../assets/images/skills/Java.webp";
import MongoIcon from "../../../assets/images/skills/MongoDB.webp";
import CSharpIcon from "../../../assets/images/skills/csharp.webp";
import DotNetIcon from "../../../assets/images/skills/dotnet.webp";
import ASPNetIcon from "../../../assets/images/skills/aspnet.webp";
import EFCoreIcon from "../../../assets/images/skills/EFCore.webp";
import BlazorIcon from "../../../assets/images/skills/Blazor.webp";
import SQLServerIcon from "../../../assets/images/skills/microsoft-sql-server-logo.webp";
import AzureIcon from "../../../assets/images/skills/azure.webp";
import AzureDevopsIcon from "../../../assets/images/skills/DevOps.webp";
import AzurePipelinesIcon from "../../../assets/images/skills/azure-pipelines.webp";
import ReactIcon from "../../../assets/images/skills/React.webp";
</script>
