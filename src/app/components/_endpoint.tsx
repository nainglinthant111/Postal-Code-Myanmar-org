import React, {useState} from 'react';
import Image from "next/image";
import Check from "../../../public/check.png";
import {Copy} from "lucide-react";
import {data, dataDetail, regionData} from "../../../Constants";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

const _Endpoint = () => {
    const [copied, setCopied] = useState(false)
    const [copiedAll, setCopiedAll] = useState(false)
    const [outputAll, setOutputAll] = useState(false)
    const [output, setOutput] = useState(false)

    const singleText = 'https://myanmar-postal-code.vercel.app/api/data/myanmar?region=01' as string;
    const allText = "https://myanmar-postal-code.vercel.app/api/data/myanmar/regions" as string;
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(singleText);
            setCopied(true);
        } catch (error) {
        } finally {
            setTimeout(() => setCopied(false), 5000);
        }
    };

    const handleCopyAll = async () => {
        try {
            await navigator.clipboard.writeText(allText);
            setCopiedAll(true);
        } catch (error) {
        } finally {
            setTimeout(() => setCopiedAll(false), 5000);
        }
    };

    const handleOutputAll = () => {
        setOutputAll(!outputAll)
    }

    const handleOutput = () => {
        setOutput(!output)
    }
    return (
        <div className="grid gap-y-10">
            <div className="text-black text-lg leading-tight">
                Get all regions
            </div>
            <div className="grid grid-cols-9 bg-gray-800 text-gray-400 px-4 py-2 sm:mr-[400px] rounded-sm">
                <div className="col-span-7 break-words">
                    {allText}
                </div>
                <div className="col-span-2 flex sm:justify-end justify-center items-center">
                    {copiedAll ? (
                        <>
                            <Image src={Check} alt="" className="w-6 h-6 ml-4 sm:ml-0 mr-1 sm:mr-0"/>
                        </>
                    ) : (
                        <div onClick={handleCopyAll}
                             className="cursor-pointer ml-4 sm:ml-0 mr-1 sm:mr-0 w-6 h-6">
                            <Copy/>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <Button variant="outline" onClick={handleOutputAll}>Output
                </Button>
            </div>
            <div>
                {outputAll && (
                    <>
                        <div className="flex flex-col bg-black text-green-400 sm:w-2/3">
                            <span className="pt-8 ml-8">[</span>
                            <span className="ml-12">{`{`}
                                <span>
                                   {regionData.map((item) => (
                                       <div key={item.region_code}>
                                           <p className="ml-4">region_code : {item.region_code}</p>
                                           <p className="ml-4">region : {item.region}</p>
                                       </div>
                                   ))}
                                </span>
                                {`} , . . .`} </span>
                            <span className="ml-8 pb-8">]</span>
                        </div>
                    </>
                )}
            </div>

            <div className="text-black text-lg leading-tight">
                Get a single region
            </div>
            <div className="grid grid-cols-9 bg-gray-800 text-gray-400 px-4 py-2 sm:mr-[400px] rounded-sm">
                <div className="col-span-7 break-words">
                    {singleText}
                </div>
                <div className="col-span-2 flex sm:justify-end justify-center items-center">
                    {copied ? (
                        <>
                            <Image src={Check} alt="" className="w-6 h-6 ml-4 sm:ml-0 mr-1 sm:mr-0"/>
                        </>
                    ) : (
                        <div onClick={handleCopy}
                             className="cursor-pointer ml-4 sm:ml-0 mr-1 sm:mr-0 w-6 h-6">
                            <Copy/>
                        </div>
                    )}
                </div>
            </div>
            <div className="border m-2 sm:mr-[400px]">
                <div className="flex border-b-2">
                    <div className="py-2 px-2 w-1/2 border-r-2">
                        <div>
                            Region_code
                        </div>
                    </div>
                    <Separator orientation="vertical"/>
                    <div className="py-2 px-2 w-1/2">
                        <div>
                            Region
                        </div>
                    </div>
                </div>
                {dataDetail.map((item) => (
                    <div key={item.tsp_code}>
                        <div className="flex border-b-2">
                            <div className="py-2 px-2 w-1/2 border-r-2">
                                <div>
                                    {item.tsp_code}
                                </div>
                            </div>
                            <Separator orientation="vertical"/>
                            <div className="py-2 px-2 w-1/2">
                                <div>
                                    {item.region}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Button variant="outline" onClick={handleOutput}>Output
                </Button>
            </div>
            <div>
                {output && (
                    <>
                        <div className="flex flex-col bg-black text-green-400 sm:w-2/3">
                            <span className="pt-8 ml-8">[</span>
                            <span className="ml-12">{`{`}
                                <span>
                                   {data.map((item) => (
                                       <div key={item.postal_code}>
                                           <p className="ml-4">mm_region : {item.mm_region}</p>
                                           <p className="ml-4">mm_town_township : {item.mm_town_township}</p>
                                           <p className="ml-4">mm_qv_tract : {item.mm_qv_tract}</p>
                                           <p className="ml-4">en_region : {item.en_region}</p>
                                           <p className="ml-4">en_town_township : {item.en_town_township}</p>
                                           <p className="ml-4">en_qv_tract : {item.en_qv_tract}</p>
                                           <p className="ml-4">tsp_code : {item.tsp_code}</p>
                                           <p className="ml-4">region_code : {item.region_code}</p>
                                           <p className="ml-4">postal_code : {item.postal_code}</p>
                                           <p className="ml-4">qv_code : {item.qv_code}</p>
                                       </div>
                                   ))}
                                </span>
                                {`}, . . .`} </span>
                            <span className="ml-8 pb-8">]</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default _Endpoint;