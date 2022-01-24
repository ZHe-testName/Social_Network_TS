import React from "react";
import {create, ReactTestInstance} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

type LocalStateType = {
    editMode: boolean,
    status: string,
    updateStatus: (status: string) => void,
};

describe('Profile Status Component', () => {
    test('Status from props should be in the state.', () => {
        const component = create(<ProfileStatus titleStatus='New Status' updateStatus={() => {}}/>);
        const instance: any = component.root;

        expect(instance.findAllByType(ProfileStatus).state.status).toBe('New Status')
    })
});

