import React from "react";
import TestRenderer, {create, ReactTestInstance} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

type LocalStateType = {
    editMode: boolean,
    status: string,
    updateStatus: (status: string) => void,
};

describe('Profile Status Component', () => {
    test('Status from props should be in the state.', () => {
        const component = TestRenderer.create(<ProfileStatus titleStatus='New Status' updateStatus={() => {}}/>);
        const instance: any = component.root;

        console.log(instance.find(component));
        expect(instance.state.status).toBe('New Status')
    })
});

