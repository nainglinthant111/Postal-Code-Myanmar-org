'use client'
import React, {useState} from 'react';
import {Box, Copy} from "lucide-react";
import {DropdownMenuCheckboxItemProps} from "@radix-ui/react-dropdown-menu"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import Check from "../../../public/check.png";
import {data, regionData} from "../../../Constants";

type Checked = DropdownMenuCheckboxItemProps["checked"]
const _Usage = () => {
    const [Ajax, setAjax] = React.useState<Checked>(true)
    const [JavaScript, setJavaScript] = React.useState<Checked>(false)
    const [copyAjax, setCopyAjax] = useState(false)
    const [copyJs, setCopyJs] = useState(false)
    const [outputAll, setOutputAll] = useState(false)

    const handleAjax = () => {
        setJavaScript(false)
        setAjax(true)
    }

    const handleJavaScript = () => {
        setAjax(false)
        setJavaScript(true)
    }

    const handleOutputAll = () => {
        setOutputAll(!outputAll)
    }

    const ajaxSnippet = ` 
       $.ajax({
                url: "https://myanmar-postal-code.vercel.app/api/data",
                type: "get",
                dataType: "json",
                contentType: "application/json",
                data: { zipCode: positalcode },
                timeout: 30000,
                success: function (response) {
                   if (response.statusCode == 401) {
                       $(".format").removeClass("d-none");
                       } else {
                           $(".format").addClass("d-none");
                         }
                          if (response.data != null) {
                                resulten = response.data.en;
                                resultmm = response.data.mm;
                                bilddata(resulten, resultmm);
                          }
                        },
                    error: function (xhr) {
                   }

       });
       
       `

    const jsSnippet = `
    fetch('https://myanmar-postal-code.vercel.app/api/data/myanmar/regions')
            .then(res=>res.json())
            .then(json=>console.log(json))   
    `

    const handleAjaxCopy = async () => {
        try {
            await navigator.clipboard.writeText(ajaxSnippet);
            setCopyAjax(true);
        } catch (error) {
        } finally {
            setTimeout(() => setCopyAjax(false), 5000);
        }
    };

    const handleJsCopy = async () => {
        try {
            await navigator.clipboard.writeText(jsSnippet);
            setCopyJs(true);
        } catch (error) {
        } finally {
            setTimeout(() => setCopyJs(false), 5000);
        }
    };

    return (
        <div className="grid gap-y-10">
            <div className="font-bold text-2xl flex items-center gap-2">
                <Box/>
                <div className="text-yellow-600">
                    Sample Usage
                </div>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Code Snippet</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuCheckboxItem
                            checked={Ajax}
                            onCheckedChange={setAjax}
                            onClick={handleAjax}
                        >
                            Ajax
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={JavaScript}
                            onCheckedChange={setJavaScript}
                            onClick={handleJavaScript}
                        >
                            JavaScript
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div>
                {Ajax && (
                    <div className="bg-gray-800 text-gray-400 px-4 py-2 w-[365px] sm:w-[850px] rounded-sm">
                        <div className="flex justify-end m-2">
                            {copyAjax ? (
                                <>
                                    <Image src={Check} alt="" className="w-6 h-6 ml-4 sm:ml-0 mr-1 sm:mr-0"/>
                                </>
                            ) : (
                                <div onClick={handleAjaxCopy}
                                     className="cursor-pointer ml-4 sm:ml-0 mr-1 sm:mr-0 w-6 h-6">
                                    <Copy/>
                                </div>
                            )}
                        </div>
                        <div className="col-span-7">
                            <code className="flex flex-col break-words">
                               <pre className="overflow-x-auto sm:overflow-hidden">
                                  {ajaxSnippet}
                                </pre>
                            </code>
                        </div>
                    </div>
                )}
            </div>
            <div className="-mt-10">
                {JavaScript && (
                    <div className="bg-gray-800 text-gray-400 px-4 py-2 w-[365px] sm:w-[850px] rounded-sm">
                        <div className="flex justify-end m-2">
                            {copyJs ? (
                                <>
                                    <Image src={Check} alt="" className="w-6 h-6 ml-4 sm:ml-0 mr-1 sm:mr-0"/>
                                </>
                            ) : (
                                <div onClick={handleJsCopy}
                                     className="cursor-pointer ml-4 sm:ml-0 mr-1 sm:mr-0 w-6 h-6">
                                    <Copy/>
                                </div>
                            )}
                        </div>
                        <div className="col-span-7">
                            <code className="flex flex-col break-words">
                               <pre className="h-60 overflow-x-auto">
                                  {jsSnippet}
                                </pre>
                            </code>
                        </div>
                    </div>
                )}
            </div>
            <div className="-mt-20">
                {Ajax || JavaScript === false && (
                    <div className="bg-gray-700 text-gray-400 sm:mr-[400px] p-4 rounded-sm">
                        Please select one of options!
                    </div>
                )}
            </div>
            <div className="-mt-14">
                <Button variant="outline" onClick={handleOutputAll}>Output</Button>
            </div>
            <div>
                {outputAll && (
                    <>
                        <div className="flex flex-col bg-black text-green-400 sm:w-2/3">
                            <span className="pt-8 ml-8">[</span>
                            <span className="ml-12">{`{`}
                                <span>
                                   {data.map((item) => (
                                       <div key={item.postal_code}>
                                           <h2 className="flex flex-col">
                                               <span className="ml-4">en :</span>
                                               <span className="flex flex-col ml-12">{`{`}</span>
                                               <span className="ml-16">region : {item.en_region}</span>
                                               <span className="ml-16">town_township :{item.en_town_township}</span>
                                               <span className="ml-16">qv_tract :{item.en_qv_tract}</span>
                                               <span className="ml-12">{`}`}</span>
                                           </h2>
                                           <h2 className="flex flex-col">
                                               <span className="ml-4">mm :</span>
                                               <span className="flex flex-col ml-12">{`{`}</span>
                                               <span className="ml-16">region : {item.mm_region}</span>
                                               <span className="ml-16">town_township :{item.mm_town_township}</span>
                                               <span className="ml-16">qv_tract :{item.mm_qv_tract}</span>
                                               <span className="ml-12">{`}`}</span>
                                           </h2>
                                           <p className="ml-4">_id : {item._id}</p>
                                           <p className="ml-4">tsp_code : {item.tsp_code}</p>
                                           <p className="ml-4">region_code : {item.region_code}</p>
                                           <p className="ml-4">postal_code : {item.postal_code}</p>
                                           <p className="ml-4">qv_code : {item.qv_code}</p>
                                       </div>
                                   ))}
                                </span>
                                {`}`} </span>
                            <span className="ml-8 pb-8">]</span>
                        </div>
                    </>
                )}
            </div>
        </div>

    );
};

export default _Usage;