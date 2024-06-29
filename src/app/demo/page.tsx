"use client";
import React, {useState} from "react";
import {useRegion} from "../../../hooks/useRegion";
import {columns} from "./columns";
import {myanColumns} from "./Myanmar/columnsMyan";
import {DataTable} from "./data-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import Loading from "../components/_loading"
import Error from "../components/_error"
import {ChevronDown} from "lucide-react"
import {MyanDataTable} from "@/app/demo/Myanmar/myanDataTable";
import {ScrollArea} from "@/components/ui/scroll-area"
import Footer from "@/app/components/_footer";

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [langData, setLangData] = useState("English")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [region, setRegion] = useState<string>("01")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filter, setFilter] = useState<string>("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [regionValue, setRegionValue] = useState("Naypyitaw Union Territory")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {useGetSingleRegionHook, useGetAllRegions} = useRegion();
    const {
        data: singleRegion, isLoading, isError, isSuccess
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useGetSingleRegionHook(region);
    const {
        data: regionList, isSuccess: allSuccess, isLoading: allLoading
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useGetAllRegions();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [position, setPosition] = React.useState("bottom")

    const handleEnglish = () => {
        setLangData("English")
    }

    const handleMyanmar = () => {
        setLangData("Myanmar")
    }

    const handleFilterQuarters = () => {
        setFilter("Quarters")
    }

    const handleFilterTownship = () => {
        setFilter("Township")
    }

    const handleFilterPostalCode = () => {
        setFilter("PostalCode")
    }

    const handleRegionCodeSelection = (regionCode: any, regionName: any) => {
        setRegion(regionCode)
        setRegionValue(regionName)
    };

    return (
        <div className="min-h-screen">
            {isError && (<Error/>)}
            {isLoading && <Loading/>}
            {isSuccess && (
                <div>
                    <div className="container sm:mx-auto pt-20">
                        <div className="flex justify-end gap-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        Filters
                                        <div className="pt-1 pl-1">
                                            <ChevronDown/>
                                        </div>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                        <DropdownMenuRadioItem
                                            value="Quarters"
                                            onClick={() => handleFilterQuarters()}>
                                            Quarters
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem
                                            value="Township"
                                            onClick={() => handleFilterTownship()}>
                                            Township
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem
                                            value="PostalCode"
                                            onClick={() => handleFilterPostalCode()}>
                                            PostalCode
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        {allLoading ? (
                                            <span className="loading loading-spinner loading-xs"></span>
                                        ) : (
                                            <>
                                                {regionValue}
                                                <div className="pt-1 pl-1">
                                                    <ChevronDown/>
                                                </div>
                                            </>
                                        )}
                                    </Button>
                                </DropdownMenuTrigger>
                                {allSuccess && (
                                    <DropdownMenuContent className="w-56 h-[310px]">
                                        <ScrollArea className="h-[300px] w-56 rounded-md">
                                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                                {regionList?.map((item: any, index: number) => (
                                                    <div key={index}>
                                                        <DropdownMenuRadioItem
                                                            value={item.region_code}
                                                            onClick={() => handleRegionCodeSelection(item.region_code, item.region)}>
                                                            {item.region}
                                                        </DropdownMenuRadioItem>
                                                        {index < regionList.length - 1 && <DropdownMenuSeparator/>}
                                                    </div>
                                                ))}
                                            </DropdownMenuRadioGroup>
                                        </ScrollArea>
                                    </DropdownMenuContent>
                                )}
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        {langData}
                                        <div className="pt-1 pl-1">
                                            <ChevronDown/>
                                        </div>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                        <DropdownMenuRadioItem
                                            value="English"
                                            onClick={() => handleEnglish()}>
                                            English
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem
                                            value="Myanmar"
                                            onClick={() => handleMyanmar()}>
                                            Myanmar
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        {langData === "Myanmar" ? (
                            <MyanDataTable columns={myanColumns} data={singleRegion.data} columnsValue={filter}/>
                        ) : (
                            <DataTable columns={columns} data={singleRegion.data} columnsValue={filter}/>
                        )}
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
};

export default page;
