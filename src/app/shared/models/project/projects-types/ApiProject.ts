import { IconAction, IconRouter, Utils } from "code-easy-components";
import { observe, set } from "react-observing";

import { TabAction/* Have circular dependênce with ProjectParse */, TabRoute } from "../tabs";
import { ETabType, PropertieTypes, EProjectType, EComponentType } from "../../../enuns";
import { IApiProject, IFileToDownloadAsZip, ITab } from "../../../interfaces";
import { IProperty, TypeOfValues } from "../../../components/external";
import { FlowToJs, ProjectsStorage } from "../../../services";
import { Project, ProjectParser } from "./../generic";

/**
 * When you already have properties
 */
interface IConstructor {
    properties: IProperty[];
    tabs?: ITab[];
    id?: string;
}
export class ApiProject extends Project implements IApiProject {

    /** Empty project */
    constructor();
    /** Return a project from some properties */
    constructor(props: IConstructor);
    /** Criating a new project */
    constructor(props?: IConstructor) {
        super({
            id: props?.id,
            type: EProjectType.api,
            tabs: props?.tabs || [
                new TabRoute({
                    properties: [
                        {
                            value: observe(false),
                            id: observe(Utils.getUUID()),
                            type: observe(TypeOfValues.hidden),
                            name: observe(PropertieTypes.isSelected),
                            propertieType: observe(PropertieTypes.isSelected),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                        {
                            value: observe(true),
                            id: observe(Utils.getUUID()),
                            type: observe(TypeOfValues.hidden),
                            name: observe(PropertieTypes.isExpanded),
                            propertieType: observe(PropertieTypes.isExpanded),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                        {
                            value: observe(true),
                            id: observe(Utils.getUUID()),
                            type: observe(TypeOfValues.hidden),
                            name: observe(PropertieTypes.isEditing),
                            propertieType: observe(PropertieTypes.isEditing),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                        {
                            id: observe(Utils.getUUID()),
                            value: observe(ETabType.tabRoutes),
                            type: observe(TypeOfValues.bigstring),
                            name: observe(PropertieTypes.description),
                            propertieType: observe(PropertieTypes.description),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                        {
                            value: observe("Routes"),
                            id: observe(Utils.getUUID()),
                            type: observe(TypeOfValues.string),
                            name: observe(PropertieTypes.label),
                            propertieType: observe(PropertieTypes.label),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                        {
                            value: observe(IconRouter),
                            id: observe(Utils.getUUID()),
                            type: observe(TypeOfValues.binary),
                            name: observe(PropertieTypes.icon),
                            propertieType: observe(PropertieTypes.icon),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                    ]
                }),
                new TabAction({
                    properties: [
                        {
                            value: observe(false),
                            id: observe(Utils.getUUID()),
                            type: observe(TypeOfValues.hidden),
                            name: observe(PropertieTypes.isSelected),
                            propertieType: observe(PropertieTypes.isSelected),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                        {
                            value: observe(false),
                            id: observe(Utils.getUUID()),
                            type: observe(TypeOfValues.hidden),
                            name: observe(PropertieTypes.isExpanded),
                            propertieType: observe(PropertieTypes.isExpanded),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                        {
                            value: observe(false),
                            id: observe(Utils.getUUID()),
                            type: observe(TypeOfValues.hidden),
                            name: observe(PropertieTypes.isEditing),
                            propertieType: observe(PropertieTypes.isEditing),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                        {
                            id: observe(Utils.getUUID()),
                            value: observe(ETabType.tabActions),
                            type: observe(TypeOfValues.bigstring),
                            name: observe(PropertieTypes.description),
                            propertieType: observe(PropertieTypes.description),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                        {
                            value: observe("Actions"),
                            id: observe(Utils.getUUID()),
                            type: observe(TypeOfValues.string),
                            name: observe(PropertieTypes.label),
                            propertieType: observe(PropertieTypes.label),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                        {
                            value: observe(IconAction),
                            id: observe(Utils.getUUID()),
                            type: observe(TypeOfValues.binary),
                            name: observe(PropertieTypes.icon),
                            propertieType: observe(PropertieTypes.icon),

                            group: observe(undefined),
                            suggestions: observe(undefined),
                            information: observe(undefined),
                            fileMaxSize: observe(undefined),
                            nameHasError: observe(undefined),
                            focusOnRender: observe(undefined),
                            valueHasError: observe(undefined),
                            nameHasWarning: observe(undefined),
                            valueHasWarning: observe(undefined),
                            nameSuggestions: observe(undefined),
                            editNameDisabled: observe(undefined),
                            onPickerNameClick: observe(undefined),
                            editValueDisabled: observe(undefined),
                            onPickerValueClick: observe(undefined),
                        },
                    ]
                }),
            ],
            properties: props?.properties || [
                {
                    id: observe(Utils.getUUID()),
                    type: observe(TypeOfValues.viewOnly),
                    value: observe(`${process.env.REACT_APP_VERSION}`),
                    name: observe(PropertieTypes.createdInPlatformVersion),
                    propertieType: observe(PropertieTypes.createdInPlatformVersion),

                    group: observe(undefined),
                    suggestions: observe(undefined),
                    information: observe(undefined),
                    fileMaxSize: observe(undefined),
                    nameHasError: observe(undefined),
                    focusOnRender: observe(undefined),
                    valueHasError: observe(undefined),
                    nameHasWarning: observe(undefined),
                    valueHasWarning: observe(undefined),
                    nameSuggestions: observe(undefined),
                    editNameDisabled: observe(undefined),
                    onPickerNameClick: observe(undefined),
                    editValueDisabled: observe(undefined),
                    onPickerValueClick: observe(undefined),
                },
                {
                    id: observe(Utils.getUUID()),
                    type: observe(TypeOfValues.viewOnly),
                    value: observe(`${process.env.REACT_APP_VERSION}`),
                    name: observe(PropertieTypes.currentPlatformVersion),
                    propertieType: observe(PropertieTypes.currentPlatformVersion),

                    group: observe(undefined),
                    suggestions: observe(undefined),
                    information: observe(undefined),
                    fileMaxSize: observe(undefined),
                    nameHasError: observe(undefined),
                    focusOnRender: observe(undefined),
                    valueHasError: observe(undefined),
                    nameHasWarning: observe(undefined),
                    valueHasWarning: observe(undefined),
                    nameSuggestions: observe(undefined),
                    editNameDisabled: observe(undefined),
                    onPickerNameClick: observe(undefined),
                    editValueDisabled: observe(undefined),
                    onPickerValueClick: observe(undefined),
                },
                {
                    id: observe(Utils.getUUID()),
                    type: observe(TypeOfValues.string),
                    name: observe(PropertieTypes.author),
                    propertieType: observe(PropertieTypes.author),
                    value: observe(ProjectsStorage.getAuthorName()),

                    group: observe(undefined),
                    suggestions: observe(undefined),
                    information: observe(undefined),
                    fileMaxSize: observe(undefined),
                    nameHasError: observe(undefined),
                    focusOnRender: observe(undefined),
                    valueHasError: observe(undefined),
                    nameHasWarning: observe(undefined),
                    valueHasWarning: observe(undefined),
                    nameSuggestions: observe(undefined),
                    editNameDisabled: observe(undefined),
                    onPickerNameClick: observe(undefined),
                    editValueDisabled: observe(undefined),
                    onPickerValueClick: observe(undefined),
                },
                {
                    value: observe('0.0.1'),
                    id: observe(Utils.getUUID()),
                    type: observe(TypeOfValues.number),
                    name: observe(PropertieTypes.version),
                    propertieType: observe(PropertieTypes.version),

                    group: observe(undefined),
                    suggestions: observe(undefined),
                    information: observe(undefined),
                    fileMaxSize: observe(undefined),
                    nameHasError: observe(undefined),
                    focusOnRender: observe(undefined),
                    valueHasError: observe(undefined),
                    nameHasWarning: observe(undefined),
                    valueHasWarning: observe(undefined),
                    nameSuggestions: observe(undefined),
                    editNameDisabled: observe(undefined),
                    onPickerNameClick: observe(undefined),
                    editValueDisabled: observe(undefined),
                    onPickerValueClick: observe(undefined),
                },
                {
                    value: observe(new Date()),
                    id: observe(Utils.getUUID()),
                    type: observe(TypeOfValues.viewOnly),
                    name: observe(PropertieTypes.createdDate),
                    propertieType: observe(PropertieTypes.createdDate),

                    group: observe(undefined),
                    suggestions: observe(undefined),
                    information: observe(undefined),
                    fileMaxSize: observe(undefined),
                    nameHasError: observe(undefined),
                    focusOnRender: observe(undefined),
                    valueHasError: observe(undefined),
                    nameHasWarning: observe(undefined),
                    valueHasWarning: observe(undefined),
                    nameSuggestions: observe(undefined),
                    editNameDisabled: observe(undefined),
                    onPickerNameClick: observe(undefined),
                    editValueDisabled: observe(undefined),
                    onPickerValueClick: observe(undefined),
                },
                {
                    value: observe(new Date()),
                    id: observe(Utils.getUUID()),
                    type: observe(TypeOfValues.viewOnly),
                    name: observe(PropertieTypes.updatedDate),
                    propertieType: observe(PropertieTypes.updatedDate),

                    group: observe(undefined),
                    suggestions: observe(undefined),
                    information: observe(undefined),
                    fileMaxSize: observe(undefined),
                    nameHasError: observe(undefined),
                    focusOnRender: observe(undefined),
                    valueHasError: observe(undefined),
                    nameHasWarning: observe(undefined),
                    valueHasWarning: observe(undefined),
                    nameSuggestions: observe(undefined),
                    editNameDisabled: observe(undefined),
                    onPickerNameClick: observe(undefined),
                    editValueDisabled: observe(undefined),
                    onPickerValueClick: observe(undefined),
                },
                {
                    value: observe(''),
                    id: observe(Utils.getUUID()),
                    type: observe(TypeOfValues.bigstring),
                    name: observe(PropertieTypes.description),
                    propertieType: observe(PropertieTypes.description),

                    group: observe(undefined),
                    suggestions: observe(undefined),
                    information: observe(undefined),
                    fileMaxSize: observe(undefined),
                    nameHasError: observe(undefined),
                    focusOnRender: observe(undefined),
                    valueHasError: observe(undefined),
                    nameHasWarning: observe(undefined),
                    valueHasWarning: observe(undefined),
                    nameSuggestions: observe(undefined),
                    editNameDisabled: observe(undefined),
                    onPickerNameClick: observe(undefined),
                    editValueDisabled: observe(undefined),
                    onPickerValueClick: observe(undefined),
                },
                {
                    value: observe(''),
                    id: observe(Utils.getUUID()),
                    type: observe(TypeOfValues.string),
                    name: observe(PropertieTypes.label),
                    propertieType: observe(PropertieTypes.label),

                    group: observe(undefined),
                    suggestions: observe(undefined),
                    information: observe(undefined),
                    fileMaxSize: observe(undefined),
                    nameHasError: observe(undefined),
                    focusOnRender: observe(undefined),
                    valueHasError: observe(undefined),
                    nameHasWarning: observe(undefined),
                    valueHasWarning: observe(undefined),
                    nameSuggestions: observe(undefined),
                    editNameDisabled: observe(undefined),
                    onPickerNameClick: observe(undefined),
                    editValueDisabled: observe(undefined),
                    onPickerValueClick: observe(undefined),
                },
            ],
        });
    }

    /** Return a full project */
    public static newProject(name: string, version: string, description: string) {
        const newProject = new ApiProject();
        set(newProject.label, name);
        set(newProject.version, version);
        set(newProject.description, description);
        return newProject;
    }

    public exportAsFiles(): IFileToDownloadAsZip {
        const getPackageJson = (): string => {
            const result = {
                private: true,
                repository: '',
                main: 'server.js',
                name: this.name.value,
                author: this.author.value,
                version: this.version.value,
                description: this.description.value,
                scripts: {
                    dev: 'node ./server.js',
                },
                dependencies: {
                    express: "^4.17.1",
                },
            };
            return JSON.stringify(result, null, 2);
        };

        const getServer = (): string => {

            return `
import express from 'express';

const app = express();
app.listen(process.env.PORT || 3333);
console.log(\`Server is running in port: ${process.env.PORT || 3333}...\`);
            `;
        };

        const getAppRoutes = (): string => {

            return '';
        };

        const project: IFileToDownloadAsZip = {
            isFolder: true,
            name: this.name.value,
            children: [
                { name: '.codeeasy', isFolder: true, children: [{ name: 'project', type: 'json', isFolder: false, content: ProjectParser.stringify(this) }] },
                { name: 'package', type: 'json', isFolder: false, content: getPackageJson() },
                { name: 'Routes', type: 'js', isFolder: false, content: getAppRoutes() },
                { name: 'server', type: 'js', isFolder: false, content: getServer() },
                {
                    name: 'src',
                    isFolder: true,
                    children: this.tabs.value.map(tab => ({
                        name: tab.label.value,
                        isFolder: true,
                        children: tab.items.value.map(treeItem => ({
                            isFolder: treeItem.type.value === EComponentType.grouper,
                            content: FlowToJs(treeItem, treeItem.items.value),
                            name: treeItem.label.value,
                            type: 'js',
                        }))
                    }))
                },
            ]
        };

        return project;
    }
}
