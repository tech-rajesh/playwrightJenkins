import { expect, test } from "@playwright/test";

// let _number: number;
// let page_number: number;
// let _sys_id: string;
// const short_description = "required ms office 365"
// Create

// Get
test("List User", async ({ request, baseURL }) => {
    const _response = await request.get(`${baseURL}`, {
        params: {
            page: 2
        }
    });

    var x = await _response.json();

    console.log(x);
    expect(_response.status()).toBe(200);           //validate status code
    
    expect(await x.data[0].first_name).toEqual("Michael")           //validate value at specific node

})

// Uppdate
test("Put- update user", async ({ request, baseURL }) => {
    const _response = await request.put("https://reqres.in/api/users", {
        data: {
            "name": "Krishna",
            "job": "leader"
        }
    });
    var apiResponse = await _response.json();
    console.log(await _response.json());
    expect(_response.status()).toBe(200);
    expect(await apiResponse.name).toEqual("Krishna")
    expect(await apiResponse.job).toEqual("leader")
})

test("post- create user", async ({ request, baseURL }) => {
    const _response = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "Krishna",
            "job": "leader"
        }
    });
    var apiResponse = await _response.json();
    console.log(await _response.json());
    expect(_response.status()).toBe(201);
   
    expect(await apiResponse.name).toEqual("morpheus")
})

// Delete
test("Delete an Incident", async ({ request, baseURL }) => {
    const _response = await request.delete("https://reqres.in/api/users/2");
    // console.log(await _response.json());
    expect(_response.status()).toBe(204);
    expect(_response.ok()).toBeTruthy();
})
