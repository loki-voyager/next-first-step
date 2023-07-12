'use client';

export default function Error({error}:{error:Error}){
    return <h1 className="label">Oops!!! {error.message}</h1>
}