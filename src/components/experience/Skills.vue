<template>
    <div id="skills" class="spacer">
        <div class="blurb">
            <h1>Skills</h1>
            <p>Technical Capabilities</p>
        </div>

        <div id="skillsHolder">
          <Skill title="C#" type="Language" :image="CSharpIcon" />
          <Skill title=".NET Core" type="Framework" :image="NetCoreIcon" />
          <Skill title="ASP.NET Core" type="Framework" :image="ASPNetIcon" />
          <Skill title="EF Core" type="Framework" :image="EFCoreIcon" />
          <Skill title="Blazor" type="Framework" :image="BlazorIcon" />
          <Skill title="SQL Server" type="Database" :image="SQLServerIcon" />
          <Skill title="Azure" type="Cloud" :image="AzureIcon" />
          <Skill title="Az. DevOps" type="Cloud" :image="AzureDevopsIcon" />
          <Skill title="Az. Pipelines" type="Cloud" :image="AzurePipelinesIcon" />
          <Skill title="JavaScript" type="Language" :image="JavascriptIcon" />
          <Skill title="VueJS" type="Framework" :image="VueIcon" />
          <Skill title="Astro" type="Framework" :image="AstroIcon" />
          <Skill title="ReactJS" type="Framework" :image="ReactIcon" />
          <Skill title="NodeJS" type="Framework" :image="NodeIcon" />
          <Skill title="HTML" type="Markup" :image="HtmlIcon" />
          <Skill title="CSS" type="Styling" :image="CssIcon" />
          <Skill title="Figma" type="UI Design" :image="FigmaIcon" />
          <Skill title="Postman" type="Debugging" :image="PostmanIcon" />
          <Skill title="PWA" type="Mobile Apps" :image="PwaIcon" />
          <Skill title="Git" type="Source Control" :image="GitIcon" />
          <Skill title="$ PHP" type="Language" :image="PhpIcon" />
          <Skill title="Java" type="Language" :image="JavaIcon" />
          <Skill title="MongoDB" type="Database" :image="MongoIcon" />
          <Skill title="Charles Proxy" type="Debugging" :image="CharlesProxyIcon" />
          <Skill title="Capacitor" type="Mobile Apps" :image="CapacitorIcon" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Skill from "./Skill.vue";

import JavascriptIcon from "../../assets/images/skills/JavaScript.webp";
import VueIcon from "../../assets/images/skills/Vue.webp";
import NodeIcon from "../../assets/images/skills/Node.webp";
import HtmlIcon from "../../assets/images/skills/HTML.webp";
import CssIcon from "../../assets/images/skills/CSS.webp";
import FigmaIcon from "../../assets/images/skills/Figma.webp";
import PostmanIcon from "../../assets/images/skills/Postman.webp";
import GitIcon from "../../assets/images/skills/Git.webp";
import PhpIcon from "../../assets/images/skills/PHP.webp";
import JavaIcon from "../../assets/images/skills/Java.webp";
import MongoIcon from "../../assets/images/skills/MongoDB.webp";
import CharlesProxyIcon from "../../assets/images/skills/CharlesProxy.webp";
import CapacitorIcon from "../../assets/images/skills/Capacitor.webp";
import CSharpIcon from "../../assets/images/skills/csharp.webp";
import NetCoreIcon from "../../assets/images/skills/NET_Core_Logo.svg.webp";
import ASPNetIcon from "../../assets/images/skills/aspnet.webp";
import EFCoreIcon from "../../assets/images/skills/EFCore.webp";
import BlazorIcon from "../../assets/images/skills/Blazor.webp";
import SQLServerIcon from "../../assets/images/skills/microsoft-sql-server-logo.webp";
import AzureIcon from "../../assets/images/skills/azure.webp";
import AzureDevopsIcon from "../../assets/images/skills/DevOps.webp";
import AzurePipelinesIcon from "../../assets/images/skills/azure-pipelines.webp";
import AstroIcon from "../../assets/images/skills/astro.webp";
import ReactIcon from "../../assets/images/skills/React.webp";
import PwaIcon from "../../assets/images/skills/pwa.webp";
</script>

<style>
    #skillsHolder {
        display: grid;
        gap: var(--margin-large);
        grid-template-columns: repeat(5, 1fr);
    }

    #skills {
        padding-top: 5%;
        height: 100%;

        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-template-columns: 1.25fr 4fr;
        /* opacity: 0.25; */
        opacity: 1;
        transition: all 1s ease-out;
    }

    @media screen and (max-width: 1300px) {
        #skillsHolder {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--margin-medium);
        }
    }


    @media screen and (max-width: 850px) {
        #skills {
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-bottom: 15%;
        }

        #skills .blurb p {
            display: none;
        }

        #skills .blurb {
            text-align: center;
            margin-top: 25%;
        }

        #skillsHolder {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--margin-medium);
            margin-top: 15%;
        }
    }
</style>

