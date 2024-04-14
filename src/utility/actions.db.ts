"use server";

import { connectToDB } from "./connect.db";
import { URL } from "./model.db";
import ShortUniqueId from "short-unique-id";

export async function generateURL(originalUrl: string) {
  try {
    await connectToDB();
    const existingRecord = await URL.findOne({
      originalUrl,
    });
    if (existingRecord) {
      return {
        status: "ok",
        shortId: existingRecord.shortId as string,
      };
    }

    const uid = new ShortUniqueId({ length: 5 });
    const shortId: string = uid.rnd();

    await URL.create({
      shortId,
      originalUrl,
    });

    return {
      status: "ok",
      shortId: shortId as string,
    };
  } catch (err) {
    console.log(err);
    console.log("had some problem generating url ");
  }
}

export async function getRealUrl(shortId: string) {
  try {
    await connectToDB();

    const url = await URL.findOneAndUpdate(
      { shortId },
      { $push: { interactions: { tStamp: Date.now() } } }
    );

    if (url) {
      return url.originalUrl;
    }
    return null;
  } catch (err) {
    console.log(err);
    console.log("couldn't get the real url");
  }
}
export async function getInfo(shortId: string) {
  try {
    await connectToDB();
    const url = await URL.findOne({ shortId });
    if (url) {
      return url;
    }
    return null;
  } catch (err) {
    // console.log(err);
    console.log("couldn't get the info for the url");
  }
}
export async function getInfoForm(shortId: string) {
  try {
    await connectToDB();
    const url = await URL.findOne({ shortId });
    if (url) {
      return url.interactions.length;
    }
    return null;
  } catch (err) {
    // console.log(err);
    console.log("couldn't get the info for the url");
  }
}
