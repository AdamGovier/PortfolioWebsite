<template>
    <div id="skills">
        <div class="blurb">
            <h2>Skills Console</h2>
            
            <div class="console-terminal spacer-small">
              <header class="terminal-titlebar">
                <span><i class="fa-solid fa-terminal" aria-hidden="true"></i> agovier@os: ~</span>
              </header>

              <div class="px-4 pt-4 pb-2">
              <p class="text-small terminal-command"><span class="terminal-prompt">[agovier@os ~]</span>$ skills --help</p>
  
              <h5 class="text-small spacer-medium">
                Ratings
              </h5>
  
              <p class="spacer-small text-small">
                <strong>Gold stars</strong> – represent professional experience level:
  
                <SkillStarExplanationItem :nStars="1" explanation="Light Usage" />
                <SkillStarExplanationItem :nStars="2" explanation="Intermediate Usage" />
                <SkillStarExplanationItem :nStars="3" explanation="In-depth Usage" />
              </p>
  
              <p class="text-small spacer-medium">
                <strong>Purple stars</strong> - represent the level of knowledge obtained within personal or university contexts:
  
                <SkillStarExplanationItem :nStars="1" type="Other" explanation="Light Knowledge" />
                <SkillStarExplanationItem :nStars="2" type="Other" explanation="Medium Knowledge" />
                <SkillStarExplanationItem :nStars="3" type="Other" explanation="Strong Knowledge" />
              </p>
  
              <p class="text-small">
                No purple stars are included if I have professional experience with that technology.
              </p>
  
              <p class="text-small spacer-medium">
                <strong>Other</strong>
  
                <p class="text-small spacer-small">
                  <i class="fa-solid fa-hourglass-end" style="color: var(--accent);"></i> - Knowledge Requires a Refresher
                </p>
              </p>
  
              <p class="text-small spacer-medium terminal-command"><span class="terminal-prompt">[agovier@os ~]</span>$ skills list<span class="terminal-cursor" aria-hidden="true"></span></p>
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
import TypescriptIcon from "../../assets/images/skills/Typescript.webp";
import VueIcon from "../../assets/images/skills/Vue.webp";
import NodeIcon from "../../assets/images/skills/Node.webp";
import HtmlIcon from "../../assets/images/skills/HTML.webp";
import CssIcon from "../../assets/images/skills/CSS.webp";
import GitIcon from "../../assets/images/skills/Git.webp";
import JavaIcon from "../../assets/images/skills/Java.webp";
import MongoIcon from "../../assets/images/skills/MongoDB.webp";
import CSharpIcon from "../../assets/images/skills/csharp.webp";
import DotNetIcon from "../../assets/images/skills/dotnet.webp";
import ASPNetIcon from "../../assets/images/skills/aspnet.webp";
import EFCoreIcon from "../../assets/images/skills/EFCore.webp";
import BlazorIcon from "../../assets/images/skills/Blazor.webp";
import SQLServerIcon from "../../assets/images/skills/microsoft-sql-server-logo.webp";
import AzureIcon from "../../assets/images/skills/azure.webp";
import AzureDevopsIcon from "../../assets/images/skills/DevOps.webp";
import AzurePipelinesIcon from "../../assets/images/skills/azure-pipelines.webp";
import ReactIcon from "../../assets/images/skills/React.webp";
</script>

<style>
    #skillsHolder {
      display: grid;
      gap: var(--margin-large);
      grid-template-columns: repeat(3, 1fr);
    }

    #skills .blurb {
      padding-right: 5%;

      font-family: "Inconsolata", monospace;
    }

    #skills {
        padding-top: 5%;
        height: 100%;

        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 3fr 4fr;
        /* opacity: 0.25; */
        opacity: 1;
        transition: all 1s ease-out;
    }

    .console-terminal {
      background-color: black;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1%;
      width: 75%;
    }

    .terminal-titlebar {
      display: flex;
      align-items: center;
      padding-left: 1%;
      padding-right: 2%;
    }

    .blurb p.terminal-command {
      overflow-wrap: anywhere;
      color: var(--text-colour);
    }

    .terminal-prompt {
      color: var(--accent);
    }

    .terminal-cursor {
      display: inline-block;
      width: 0.5em;
      height: 1em;
      margin-left: 0.35em;
      background-color: currentColor;
      vertical-align: -0.15em;
    }

    @media screen and (max-width: 1300px) {
        #skillsHolder {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--margin-medium);
        }
    }


    @media screen and (max-width: 850px) {
        .console-terminal {
          width: 100%;
        }

        #skills {
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-bottom: 15%;
        }

        #skills .blurb {
            text-align: left;
            margin-top: 25%;
            padding-right: 0;
        }

        #skillsHolder {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--margin-medium);
            margin-top: 15%;
        }
    }
</style>
